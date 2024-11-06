import FormularioProjeto from '@/views/FormularioProjeto.vue'
import Projetos from '@/views/Projetos.vue'
import Tarefas from '@/views/Tarefas.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'tarefas',
    component: Tarefas,
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: Projetos,
  },
  {
    path: '/projetos/novo',
    name: 'novo-projeto',
    component: FormularioProjeto,
  },
  {
    path: '/projetos/:id',
    name: 'editar-projeto',
    component: FormularioProjeto,
  },
]
const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
})
export default roteador
