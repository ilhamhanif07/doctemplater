import gql from 'graphql-tag';

export const insertDocumentSubType = async (client, param) => {
	const strSQL = gql`
    mutation InsertDocumentSubType($input: InsertDocumentSubTypeInput) {
        insertDocumentSubType(input: $input) {
          status
          errMsg
          id_affected
        }
      }
    `

	var { data } = await client.mutate({
		mutation: strSQL,
		variables: {
			input: param,
		}
	})

	return data.insertDocumentSubType;
}

export const updateDocumentSubType = async (client, param) => {
	const strSQL = gql`
    mutation UpdateDocumentSubType($input: UpdateDocumentSubTypeInput) {
        updateDocumentSubType(input: $input) {
          status
          errMsg
          id_affected
        }
      }`

	var { data } = await client.mutate({
		mutation: strSQL,
		variables: {
			input: param,
		}
	})

	return data.updateDocumentSubType;
}

export const insertMappingAttachment = async (client, param) => {
	const strSQL = gql`
    mutation InsertMappingAttachment($input: InsertMappingAttachmentInput) {
        insertMappingAttachment(input: $input) {
          status
          errMsg
          id_affected
        }
      }
    `

	var { data } = await client.mutate({
		mutation: strSQL,
		variables: {
			input: param,
		}
	})

	return data.insertMappingAttachment;
}

export const updateMappingAttachment = async (client, param) => {
	const strSQL = gql`
  mutation UpdateMappingAttachment($input: UpdateMappingAttachmentInput) {
    updateMappingAttachment(input: $input) {
      status
      errMsg
      id_affected
    }
  }
  `

	var { data } = await client.mutate({
		mutation: strSQL,
		variables: {
			input: param,
		}
	})

	return data.updateMappingAttachment;
}
