const fetchAPI = async (query: string, { variables, preview = false }: { variables?: any; preview: boolean }) => {
  if (
    !process.env.GRAPHCMS_PROJECT_API ||
    !process.env.GRAPHCMS_DEV_AUTH_TOKEN ||
    !process.env.GRAPHCMS_PROD_AUTH_TOKEN
  ) {
    throw Error('One or more required env variables are empty')
  }

  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${preview ? process.env.GRAPHCMS_DEV_AUTH_TOKEN : process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    // eslint-disable-next-line no-console
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(json.errors))
    throw Error('Failed to fetch API')
  }

  return json.data
}

const GET_REPUBLIC = `
  query Republics($republicId: RepublicType!) {
    republic(where: {republicType: $republicId}) {
      republicType
      leadText
      leadAuthor
      welcomeHeader
      welcomeDescription
      welcomeCards {
        ... on WelcomeCard {
          id
          title
          description
          iconUrl
        }
      }
      whoHeader
      whoDescription
      persons {
        ... on Person {
          id
          title
          fullName
          description
        }
      }
      reachedGoals
      currentGoals
      files {
        ...on File {
          id
          title
          author
          date
          type
          url
        }
      }
    }
  }
`

const getRepublic = async (republic: string, preview = process.env.VERCEL_ENV !== 'production') => {
  const data = await fetchAPI(GET_REPUBLIC, {
    variables: {
      republicId: republic,
    },
    preview,
  })

  return data
}

const CREATE_REPUBLIC_PROPOSITION = `
mutation CreateRepublicProposition($data: RepublicPropositionCreateInput = {name: "", description: ""}) {
  createRepublicProposition(data: $data) {
    id
  }
}
`
type RepublicPropositionCreateInput = {
  name: string
  description: string
}

const createRepublicProposition = async (
  proposition: RepublicPropositionCreateInput,
  preview = process.env.VERCEL_ENV !== 'production'
) => {
  const data = await fetchAPI(CREATE_REPUBLIC_PROPOSITION, {
    variables: {
      data: proposition,
    },
    preview,
  })

  return data.createRepublicProposition
}

export { getRepublic, createRepublicProposition }
