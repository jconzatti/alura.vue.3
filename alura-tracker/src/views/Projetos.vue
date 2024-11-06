<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'Projetos',
  components: { RouterLink },
  setup() {
    const store = useStore()
    return {
      projetos: computed(() => store.state.projetos),
    }
  },
})
</script>

<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <RouterLink to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </RouterLink>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lProjeto in projetos" :key="lProjeto.id">
          <td>{{ lProjeto.id }}</td>
          <td>{{ lProjeto.nome }}</td>
          <td>
            <RouterLink :to="`/projetos/${lProjeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="css" scoped>
.projetos {
  padding: 1.25rem;
}
table {
  margin-top: 2rem;
}
</style>
