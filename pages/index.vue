<script setup>
  import { UseTimeAgo } from '@vueuse/components'
  const toast = useToast()
  const { copy } = useCopyToClipboard()
  const newTodo = ref('')
  const loading = ref(false)

  const items = ref('')

  function copyUrl() {
    copy(window.location.href, { title: 'URL copied to clipboard' })
  }
  function newList() {
    window.location.href = '/'
  }

  onMounted(() => {
    toast.add({
      title: 'Shared Todo List Created',
      description: 'Share this page to collaborate with others.',
    })
    // new EventSource(`/api/${listId}`).addEventListener('message', (event) => {
    //   todos.value = JSON.parse(event.data)
    // })
  })

  async function send() {
    const result = await $fetch('/api/crawler', {
      method: 'POST',
      query: { keyword: encodeURIComponent(newTodo.value) },
    })

    console.log(result)

    items.value = result
  }

  async function addTodo() {
    if (!newTodo.value.trim() || loading.value) return
    loading.value = true
    await $fetch(`/api/${listId}`, {
      method: 'POST',
      body: { text: newTodo.value },
    })
    loading.value = false
    newTodo.value = ''
  }

  async function toggleTodo(todo) {
    await $fetch(`/api/${listId}/${todo.id}`, {
      method: 'PATCH',
      body: { completed: !todo.completed },
    })
  }
  async function deleteTodo(todoId) {
    await $fetch(`/api/${listId}/${todoId}`, {
      method: 'DELETE',
    })
  }
</script>

<template>
  <UPageBody>
    <UAlert
      color="blue"
      variant="subtle"
      title="Share this page to collaborate with others."
      :actions="[
        { label: 'Copy URL', click: copyUrl },
        { label: 'New List', click: newList },
      ]"
    />
    <form class="mt-6 flex gap-1" @submit.prevent="send">
      <UInput
        v-model="newTodo"
        size="xl"
        required
        placeholder="Add a todo item"
        class="flex-1"
      />
      <UButton
        size="xl"
        type="submit"
        color="blue"
        icon="i-arrow-small-right-20-solid"
        :loading="loading"
      />
    </form>
    <div>{{ items }}</div>
  </UPageBody>
</template>
