<script>

	import { Dialog } from 'quasar'

	export default{
		props:['list'],
		methods:{
			askRemove(expense){

				const VmThis = this

				Dialog.create({
				  title: 'Tem certeza?',
				  buttons: [
				    {
				      label: 'Cancelar'
				    },
				    {
				      label: 'Confirmar',
				      handler () {
				        VmThis.remove(expense)
				      }
				    }
				  ]
				})
			},
			remove(expense){
 			
 				this.$db.ref(`expenses/${expense.id}`).remove()
			
			},
			toggle(expense){
				
				expense.done = !expense.done

				this.$db.ref(`expenses/${expense.id}`).update(expense)
				
			}
		}
	}
</script>

<template>	
	<div>
		<div class="expense" v-for="expense in list" @click="toggle(expense)">
			<p :class="{ done: expense.done }">{{ expense.date }} - R${{ expense.amount }}</p>
			<p :class="{ done: expense.done }">{{ expense.description }}</p>
			<a class="removeLink" href="#" @click.prevent="askRemove(expense)"> remover</a>
		</div>	
	</div>
</template>

<style>
	.done{
		text-decoration: line-through;
		color: #ccc;
	}	
	.expense{
		border-bottom: #999 1px solid;
		padding-top: 10px;
		position: relative;
		cursor: pointer;
	}
	.removeLink{
		color: #c00000;
		position: absolute;
		bottom: 10px;
		right: 0;
		font-size: 0.8em;
	}
</style>
