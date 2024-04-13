<template>
  <section class="contact-view pt-8">
    <h2 class="text-6xl text-center mb-8">Contato</h2>
    <p class="text-md text-center mb-16">
      Estou disponível através dos contatos abaixo.
      Se desejar preencha o formulário para ser redirecionado
      diretamente para o meu whatsapp
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div class="flex flex-col items-center lg:items-start mb-8">
        <h2 class="text-3xl mb-8">Entre em contato comigo</h2>
        <div class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-slate-300 text-xs font-bold mb-2" for="grid-first-name">
                Nome
              </label>
              <input
                v-model="name"
                class="appearance-none block w-full bg-slate-900 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder="Seu nome"
                :class="{
                  'border-red-500': !!errors.name
                }"
              >
              <p v-if="errors.name" class="text-red-500 text-xs italic">{{ errors.name }}</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-slate-300 text-xs font-bold mb-2" for="grid-last-name">
                Whatsapp
              </label>
              <input
                v-model="phone"
                class="appearance-none block w-full bg-slate-900 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                id="grid-phone"
                type="phone"
                placeholder="(XX) X XXXX-XXXX"
                :class="{
                  'border-red-500': !!errors.phone
                }">
              <p v-if="errors.phone" class="text-red-500 text-xs italic">{{ errors.phone }}</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-slate-300 text-xs font-bold mb-2" for="grid-password">
                Mensagem
              </label>
              <textarea
                v-model="message"
                class="appearance-none block w-full bg-slate-900 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                :class="{
                  'border-red-500': !!errors.message
                }"
                placeholder="Mensagem"
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-xs italic">{{ errors.message }}</p>
            </div>
          </div>
          <button class="btn btn-primary w-full text-center" @click="go_to_whastapp">
            Enviar
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center lg:items-start md:pl-8 pt-16 lg:pt-0">
        <h2 class="text-3xl mb-8">Redes sociais</h2>
        <a class="flex items-center justify-start mb-4" href="mailto:dev.matheusnpenna@gmail.com" target="_blank">
          <svg class="mr-4" stroke="currentColor" fill="currentColor" stroke-width="0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
          dev.matheusnpenna@gmail.com
        </a>
        <a class="flex items-center justify-start mb-4" href="https://www.linkedin.com/in/matheuspenna" target="_blank">
          <svg class="mr-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
          linkedin.com/in/matheuspenna
        </a>
        <a class="flex items-center justify-start mb-4" href="https://github.com/matheusnpenna" target="_blank">
          <svg class="mr-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
          github.com/matheusnpenna
        </a>
        <a class="flex items-center justify-start" href="https://www.instagram.com/omatheuspenna/" target="_blank">
          <svg class="mr-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          instagram.com/omatheuspenna
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { watch } from 'vue';
const CLEARED_ERRORS = {
  name: null,
  phone: null,
  message: null
};

const name = ref("");
const phone = ref("");
const message = ref("");
const errors = reactive({ ...CLEARED_ERRORS });

watch(name, () => { errors.name = null; })
watch(phone, () => { errors.phone = null; })
watch(message, () => { errors.message = null; })

const go_to_whastapp = () => {
  if (!name.value.length) {
    errors.name = "Por favor, preencha seu nome";
    return;
  }

  if (!phone.value.length) {
    errors.phone = "Por favor, preencha seu whatsapp";
    return;
  }

  if (!message.value.length) {
    errors.message = "Por favor, digite sua mensagem";
    return;
  }

  window.open(`https://api.whatsapp.com/send?phone=5575981535971&text=Olá, me chamo ${name.value} - ${message.value} - Meu whatsapp é: ${phone.value}`)
}
</script>
<style lang="scss" scoped>
.contact-view {
}
</style>
