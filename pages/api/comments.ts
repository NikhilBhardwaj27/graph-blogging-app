// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql, GraphQLClient } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {name,email,comment,slug} = req.body
  const graphQLClient = new GraphQLClient(graphqlAPI,{
    headers:{
      authorization:`Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  const query = gql `
    mutation CreateComment($name:String!,$email:String!,$comment:String!,$slug:String!) {
      createComment(data:{name:$name,email:$email,comment:$comment,post:{connect:{slug:$slug}}}){id}
    }
  `
  const result = await graphQLClient.request(query,req.body)
  return res.status(200).send(result);
}
