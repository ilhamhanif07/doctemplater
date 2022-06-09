import gql from "graphql-tag";

export const InsertRequestCompDocsDeeds = async (
  client,
  submit,
  header,
  detail,
  attachment,
  authorized,
  paidUp,
  director,
  commissioner
) => {
  const mutation = gql`
    mutation InsertRequestCompDocsDeeds(
      $submit: Boolean
      $header: InsertCompDocsDeedsInput
      $detail: DocsDeedsDetailInput
      $attachment: [AttachmentInput]
      $authorized: [AuthorizedInput]
      $paidUp: [PaidUpInput]
      $director: [DirectorInput]
      $commissioner: [CommissionerInput]
    ) {
      insertRequestCompDocsDeeds(
        submit: $submit
        header: $header
        detail: $detail
        attachment: $attachment
        authorized: $authorized
        paidUp: $paidUp
        director: $director
        commissioner: $commissioner
      ) {
        response {
          status
          errMsg
          id_affected
        }
        id
        request_number
      }
    }
  `;
  var { data } = await client.mutate({
    mutation: mutation,
    variables: {
      submit: submit,
      header: header,
      detail: detail,
      attachment: attachment,
      authorized: authorized,
      paidUp: paidUp,
      director: director,
      commissioner: commissioner,
    },
  });
  return data;
};

export const DeleteRequest = async (client, requestId, actionBy) => {
  const mutation = gql`
    mutation DeleteRequest($requestId: String, $actionBy: String) {
      deleteRequest(request_id: $requestId, action_by: $actionBy) {
        status
        errMsg
        id_affected
      }
    }
  `;
  var { data } = await client.mutate({
    mutation: mutation,
    variables: {
      requestId: requestId,
      actionBy: actionBy,
    },
  });
  return data;
};
