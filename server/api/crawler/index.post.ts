import { crawler, createRequest } from '@/server/utils/main'
import { z } from 'zod'

export default eventHandler(async (event) => {
  // const { keyword } = await getValidatedQuery(
  //   event,
  //   z.object({
  //     keyword: z.string(),
  //   }).parse
  // )

  const query = await getValidatedQuery(
    event,
    z.object({
      keyword: z.string(),
    }).parse
  )

  const keyword = query.keyword

  const requestOption = createRequest(keyword)

  console.log('requestOption', requestOption)

  crawler.addRequests([{ ...requestOption }])

  const result = await crawler.run()

  //   const todo = await readValidatedBody(
  //     event,
  //     z.object({
  //       id: z
  //         .string()
  //         .optional()
  //         .default(() => randomUUID()),
  //       text: z.string().trim().min(1),
  //       completed: z.boolean().default(false),
  //       createdAt: z.string().default(Date),
  //       updatedAt: z.string().default(Date),
  //     }).parse
  //   )

  //   const kv = await useKv()
  //   const op = kv.atomic()
  //   op.set(['list', listId, todo.id], todo)
  //   op.set(['list_updated', listId], true)
  //   await op.commit()

  //   return todo

  return result
})
