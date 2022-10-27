import { NextApiRequest, NextApiResponse } from 'next'

import { createRepublicProposition } from '@lib/api/hygraph'

export default async function CreateRepublicProposition(req: NextApiRequest, res: NextApiResponse) {
  const { name, description } = JSON.parse(req.body)

  try {
    const { id } = await createRepublicProposition({ name, description })
    res.send(JSON.stringify({ id }))
  } catch (error) {
    res.send({
      error: true,
      message: (error as Error).message,
    })
  }
}
