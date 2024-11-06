<script lang="ts">
import { defineComponent } from 'vue'
import Temporizador from './Temporizador.vue'
export default defineComponent({
  name: 'FormularioTarefa',
  emits: ['eventoFinalizarTarefa'],
  data() {
    return {
      descricaoDaTarefa: '' as string,
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
      })
      this.descricaoDaTarefa = ''
    },
  },
})
</script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricaoDaTarefa"
        />
      </div>
      <div class="column">
        <Temporizador @evento-temporizador-finalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>
