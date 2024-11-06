<script lang="ts">
import { computed, defineComponent } from 'vue'
import Temporizador from './Temporizador.vue'
import { useStore } from '@/store'
export default defineComponent({
  name: 'FormularioTarefa',
  emits: ['eventoFinalizarTarefa'],
  data() {
    return {
      descricaoDaTarefa: '' as string,
      idDoProjeto: '' as string,
    }
  },
  components: {
    Temporizador,
  },
  methods: {
    finalizarTarefa(pTempoDaTarefaEmSegundos: number): void {
      this.$emit('eventoFinalizarTarefa', {
        descricao: this.descricaoDaTarefa,
        duracaoEmSegundos: pTempoDaTarefaEmSegundos,
        projeto: this.projetos.find((lProjeto) => lProjeto.id === this.idDoProjeto),
      })
      this.descricaoDaTarefa = ''
    },
  },
  setup() {
    const store = useStore()
    return {
      projetos: computed(() => store.state.projetos),
    }
  },
})
</script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricaoDaTarefa"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idDoProjeto">
            <option value="">Selecione o projeto</option>
            <option :value="lProjeto.id" v-for="lProjeto in projetos" :key="lProjeto.id">
              {{ lProjeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @evento-temporizador-finalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>
