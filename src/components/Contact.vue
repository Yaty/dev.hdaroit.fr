<template>
  <container id="contact">
    <h2 class="title">{{ $t('contact.title') }}</h2>
    <form class="box">
      <div class="field">
        <label for="name" class="label">* {{ $t('contact.name.label') }}</label>
        <div class="control has-icons-left">
          <input id="name" class="input" type="text" :placeholder="$t('contact.name.placeholder')" v-model="name">
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label for="email" class="label">* {{ $t('contact.email.label') }}</label>
        <div class="control has-icons-left">
          <input id="email" :class="{ input: true, 'is-danger': invalidEmail }" type="email" :placeholder="$t('contact.email.placeholder')" v-model="email">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label for="subject" class="label">* {{ $t('contact.subject.label') }}</label>
        <div class="control">
          <input id="subject" class="input" type="text" :placeholder="$t('contact.subject.placeholder')" v-model="subject">
        </div>
      </div>

      <div class="field">
        <label for="message" class="label">* {{ $t('contact.message.label') }}</label>
        <div class="control">
          <textarea id="message" class="textarea" :placeholder="$t('contact.message.placeholder')" v-model="message"></textarea>
        </div>
      </div>

      <input class="is-hidden" type="text" v-model="gotcha"/>

      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <a :class="{ button: true, 'is-info': true, 'is-loading': contacting, 'is-static': isSubmitDisabled }" @click="send">
            <span class="icon is-small" v-if="contactingSuccess">
              <i class="fa fa-check"></i>
            </span>
            <span class="icon is-small" v-else-if="contactingSuccess === false">
              <i class="fa fa-close"></i>
            </span>
            <span>{{ $t('contact.submit') }}</span>
          </a>
        </div>
        <div class="control">
          <a class="button is-primary" @click="reset">{{ $t('contact.reset') }}</a>
        </div>
      </div>
      <div class="level">
        <div class="level-left"></div>
        <div class="level-right">
          <p class="level-item heading">* {{ $t('contact.mandatory') }}</p>
        </div>
      </div>
    </form>
  </container>
</template>

<script>
  import Container from './layout/Container.vue'

  export default {
    name: 'contact',
    components: { Container },
    data () {
      return {
        name: null,
        subject: null,
        email: null,
        message: null,
        gotcha: null,
        contacting: null,
        contactingSuccess: null,
        invalidEmail: null
      }
    },
    computed: {
      isSubmitDisabled () {
        const isEmailValid = Boolean(this.invalidEmail === false && this.email && this.email.length > 0)
        const isNameValid = Boolean(this.name && this.name.length > 0)
        const isSubjectValid = Boolean(this.subject && this.subject.length > 0)
        const isMsgValid = Boolean(this.message && this.message.length > 0)
        const isGotchaValid = Boolean(this.gotcha === null)
        const res = Boolean(isEmailValid && isNameValid && isSubjectValid && isSubjectValid && isMsgValid && isGotchaValid)
        return res === false
      }
    },
    watch: {
      email () {
        if (this.email) {
          this.invalidEmail = !/\S+@\S+\.\S+/.test(this.email)
        }
      }
    },
    methods: {
      send () {
        this.contacting = true
        this.contactingSuccess = null
        const http = new XMLHttpRequest()
        const url = 'https://formspree.io/contact@hdaroit.fr' // We use Formspree in order to send the email
        const data = {
          _subject: this.subject,
          _replyto: this.email,
          _gotcha: this.gotcha,
          name: this.name,
          message: this.message
        }

        http.open('POST', url, true)
        http.setRequestHeader('Content-Type', 'application/json')
        http.onreadystatechange = () => {
          if (http.readyState === XMLHttpRequest.DONE) {
            this.contactingSuccess = http.status === 200
            this.contacting = false
          }
        }
        http.send(JSON.stringify(data))
      },
      reset () {
        this.name = null
        this.subject = null
        this.email = null
        this.message = null
      }
    }
  }
</script>
