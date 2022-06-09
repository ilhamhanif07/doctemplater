import gql from "graphql-tag";
import axios from "axios";

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
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data.getDocumentSubType;
};

export const getDocumentType = async (client) => {
  const strSQL = gql`
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
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data.getDocumentType;
};

export const GetRequestTypeByDocumentTypeId = async (
  client,
  documentTypeId
) => {
  const strSQL = gql`
    query GetRequestTypeByDocumentTypeId($documentTypeId: String) {
      getRequestTypeByDocumentTypeId(document_type_id: $documentTypeId) {
        data {
          id
          request_type_name
          document_type_id
          create_date
          documentType {
            id
            document_type_name
            create_date
          }
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;
  var { data } = await client.query({
    query: strSQL,
    variables: { documentTypeId: documentTypeId },
  });
  return data;
};

export const GetCompDocsDeeds = async (client) => {
  const strSQL = gql`
    query GetCompDocsDeeds {
      getCompDocsDeeds {
        data {
          header {
            id
            request_number
            documentType {
              document_type_name
            }
            requestType {
              request_type_name
            }
            sbu {
              id
              company_name
            }
            requestor {
              employee_name
            }
            create_date
            requestStatus {
              request_status_name
            }
          }
          detail {
            request_id
          }
        }
      }
    }
  `;
  var { data } = await client.query({
    query: strSQL,
  });
  return data;
};

export const GetRequestorCompany = async (client) => {
  const strSQL = gql`
    query GetRequestorCompany {
      getRequestorCompany {
        data {
          id
          company_name
          company_alias
          create_date
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data;
};

export const GetDisputeSettlement = async (client) => {
  const strSQL = gql`
    query GetDisputeSettlement {
      getDisputeSettlement {
        data {
          header {
            id
            request_number
            create_date
            documentType {
              document_type_name
              id
            }
            requestType {
              request_type_name
              id
            }
            requestor {
              id
              employee_name
            }
            sbu {
              company_name
              id
            }
            documentSubType {
              document_subtype_name
            }
            shipperEntity {
              nama_shipper
              kode_shipper
            }
            requestStatus {
              request_status_name
            }
          }
        }
      }
    }
  `;
  var { data } = await client.query({
    query: strSQL,
  });
  return data;
};

export const GetCurrencyLegal = async (client) => {
  const strSQL = gql`
    query GetCurrencyLegal {
      getCurrencyLegal {
        data {
          id
          code
          description
          active
          create_date
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data;
};

export const getEntityStatus = async (client) => {
  const strSQL = gql`
    query GetEntityStatus {
      getEntityStatus {
        data {
          id
          status_name
          create_date
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data;
};

export const getSharesClassification = async (client) => {
  const strSQL = gql`
    query Data {
      getSharesClassification {
        data {
          id
          shares_classification_name
          create_date
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data;
};

export const GetBoardTitleByTitleType = async (client, titleType) => {
  const strSQL = gql`
    query GetBoardTitleByTitleType($titleType: String) {
      getBoardTitleByTitleType(title_type: $titleType) {
        data {
          id
          title_type
          title_name
          create_date
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: { titleType: titleType },
  });

  return data;
};

export const GetEntityType = async (client) => {
  const strSQL = gql`
    query GetEntityType {
      getEntityType {
        data {
          id
          type_name
          create_date
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data;
};

export const GetUserCompany = async (client) => {
  const strSQL = gql`
    query GetUserCompany {
      getUserCompany {
        data {
          id
          company_name
          company_alias
          create_date
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data;
};

export const GetRequestStatus = async (client) => {
  const strSQL = gql`
    query GetRequestStatus {
      getRequestStatus {
        data {
          id
          request_status_name
          create_date
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: {},
  });

  return data;
};

export const GetDocumentSubTypeByDocumentTypeId = async (
  client,
  documentTypeId
) => {
  const strSQL = gql`
    query GetDocumentSubTypeByDocumentTypeId($documentTypeId: String) {
      getDocumentSubTypeByDocumentTypeId(document_type_id: $documentTypeId) {
        data {
          id
          document_subtype_name
          document_type_id
          active
          create_date
          update_by
          update_date
          create_by
          documentType {
            id
            document_type_name
            create_date
          }
        }
        response {
          status
          errMsg
          id_affected
        }
      }
    }
  `;

  var { data } = await client.query({
    query: strSQL,
    variables: { documentTypeId: documentTypeId },
  });

  return data;
};

export const GetTransporterAgreement = async ( client ) => {
  const strSQL = gql`
  query GetTransporterAgreement {
    getTransporterAgreement {
      data {
        id
        document_number
        transporter_id
        signature_date
        effective_date
        expiry_date
        waktu_berlaku_hari
        management_fee_persen
        waktu_keluhan_hari
        status_id
        create_by
        update_by
        create_date
        update_date
        transporter {
          id
          kode_transporter
          nama_transporter
          alamat
          phone
          active
          create_date
          update_date
          create_by
          update_by
        }
        transporterDetail {
          id
          transporter_id
          nama_direktur
          jabatan
          no_akta
          tanggal_akta
          nama_notaris
          nama_bank
          wilayah_notaris
          no_rekening
          nama_pemilik_rekening
          create_date
        }
        mostransDetail {
          id
          nama_perusahaan
          alamat
          nama_pic
          no_hp
          jenis_perizinan
          npwp
          no_perizinan
          akta_available
          no_akta
          nama_bank
          no_rekening
          create_date
          nama_pemilik_rekening
        }
        status {
          id
          request_status_name
          create_date
        }
        createBy {
          id
          employee_id
          employee_name
          jabatan_id
          no_hp
          email_pribadi
          email_mostrans
          password
          create_date
          update_date
          jabatan {
            id
            position_name
            create_date
            update_date
          }
        }
        updateBy {
          id
          employee_id
          employee_name
          jabatan_id
          no_hp
          email_pribadi
          email_mostrans
          password
          update_date
          create_date
          jabatan {
            id
            position_name
            create_date
            update_date
          }
        }
      }
      response {
        status
        errMsg
        id_affected
      }
    }
  }
  `;

  var { data } = await client.query({
    query: strSQL
  });

  return data;
};

export const GetTransporter = async ( client ) => {
  const strSQL = gql`
  query GetTransporter {
    getTransporter {
      data {
        id
        kode_transporter
        nama_transporter
        alamat
        phone
        active
      }
      response {
        status
        errMsg
        id_affected
      }
    }
  }
  `;

  var { data } = await client.query({
    query: strSQL
  });

  return data;
};

export const GetCity = async (lat, lang) => {
  const client = axios.create({
    baseURL: `http://api.positionstack.com/v1/reverse?access_key=dc586057e12adb40c0871a4a62d3a90e&query=${lat},${lang}&limit=1` 
  });

  let data = {}
  let city = ""

  await client.get().then((response) => {
    data = response
    city = response?.data?.data[0]?.county
 });

 return city
}
