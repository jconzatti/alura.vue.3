<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormularioProjeto',
  data() {
    return {
      nomeDoProjeto: '' as string,
    }
  },
  methods: {
    salvarProjeto() {
      this.store.commit('ADICIONAR_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = ''
      this.$router.push('/projetos')
    },
  },
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
})
</script>

<template>
  <section class="projetos">
    <h1 class="title">Projeto</h1>
    <form @submit.prevent="salvarProjeto">
      <div class="field">
        <label for="nome-projeto" class="label">Nome do projeto</label>
        <input type="text" class="input" id="nome-projeto" v-model="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<style lang="css" scoped>
.projetos {
  padding: 1.25rem;
}
</style>
