import gql from 'graphql-tag';

export const getDocumentSubType = async (client) => {
	const strSQL = gql`
    query GetDocumentSubType {
        getDocumentSubType {
          response {
            status
            errMsg
            id_affected
          }
          data {
            id
            document_subtype_name
            status
            create_date
            create_by
            update_date
            update_by
            documentType {
              id
              document_type_name
            }
          }
        }
      }
    `

	var { data } = await client.query({
		query: strSQL,
		variables: {

		}
	})

	return data.getDocumentSubType;
}

export const getDocumentType = async (client) => {
	const strSQL = gql `
	query GetDocumentType {
		getDocumentType {
		  response {
			status
			errMsg
			id_affected
		  }
		  data {
			id
			document_type_name
			create_date
		  }
		}
	  }
	`

	var { data } = await client.query({
		query: strSQL,
		variables: {}
	})

	return data.getDocumentType;
}