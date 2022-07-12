import React from "react";

function BodyLegal3() {
  return (
    <div
      className="mt-1"
      style={{
        height: "100%",
        color: "black",
        fontSize: "14px",
        fontFamily: "Roboto, Helvetica Neue, sans-serif",
        width: "674px",
      }}
    >
      <div
        className="ml-1"
        style={{
          textAlign: "justify",
        }}
      >
        <ol
          style={{
            listStyle: "lower-latin",
            marginLeft: "100px",
            fontSize: "12px",
          }}
          start={8}
        >
          <li>
            Melakukan penyelidikan dalam hal terjadinya penyimpangan dalam atas
            Klaim sesuai Prosedur Operasional Standar MOSTRANS. Setiap
            penyelidikan wajib memberikan penjelasan, serta tindakan korektif
            dan pencegahan.
          </li>
          <li>
            Memberikan informasi apabila terdapat hambatan operasional layanan
            MOSTRANS, maksimal 1 (satu) Hari Kalender sejak terjadinya hambatan;
          </li>
          <li>Menjaga nama baik, reputasi dan citra Shipper;</li>
          <li>
            Memastikan dan menjamin bahwa{" "}
            <span style={{ fontStyle: "italic" }}>Transporter</span> akan
            melakukan penjemputan dan pengiriman Barang tepat pada waktunya
            kepada dan diterima dalam kondisi baik oleh{" "}
            <span style={{ fontStyle: "italic" }}>Receiver</span>;
          </li>
          <li>
            Memastikan dan menjamin bahwa Transporter akan tunduk dan mematuhi
            syarat dan ketentuan Perjanjian ini;
          </li>
          <li>
            Mematuhi dan melaksanakan seluruh ketentuan dalam peraturan dan
            perundang-undangan yang berlaku;
          </li>
        </ol>
      </div>
      <br />
      <div
        className="ml-1"
        style={{
          textAlign: "justify",
        }}
      >
        <ol
          style={{
            listStyle: "decimal",
            marginLeft: "15px",
          }}
          start={2}
        >
          <li>
            Hukum yang Berlaku dan Penyelesaian sengketa
            <br />
            <br />
            <span style={{ fontSize: "12px" }}>
              Perjanjian ini diatur dan ditafsirkan berdasarkan Hukum yang
              berlaku di Negara Republik Indonesia.
            </span>
            <ol
              style={{
                listStyle: "decimal",
                marginLeft: "15px",
                fontSize: "12px",
              }}
            >
              <li>
                Setiap perselisihan yang terjadi diantara kedua belah pihak yang
                menyangkut pelaksanaan dari Perjanjian ini, terlebih dahulu akan
                diselesaikan secara musyawarah
              </li>
              <li>
                Apabila dalam 30 (tiga puluh) hari dengan cara musyawarah tidak
                dapat dicapai penyelesaian, Para Pihak sepakat untuk
                menyelesaikan perselisihan oleh arbitrase sesuai dengan
                ketentuan hukum peraturan Badan Arbitrase Nasional Indonesia.
                Dalam hal Para Pihak, sedang dalam proses penyelesaian
                perselisihan sebagaimana dimaksud pada Pasal ini, maka Para
                Pihak tetap melaksanakan kewajibannnya kecuali disepakati lain
                oleh Para Pihak.
              </li>
            </ol>
          </li>
          <br />
          <li>Surat Penawaran</li>
          <br />
          <span style={{ fontSize: "12px" }}>
            Surat Penawaran adalah surat yang berisi daftar rute, tipe
            kendaraan, penawaran harga, serta hal-hal lain yang perlu diketahui
            Shipper sebagaimana diuraikan dalam Lampiran Surat
            Penawaran/Quotation pada Perjanjian ini.
          </span>
          <p style={{ fontSize: "12px" }}>
            Setiap Surat Penawaran yang disampaikan oleh Mostrans kepada Shipper
            berikut perubahan-perubahannya merupakan suatu Lampiran dalam
            Perjanjian ini sehingga menjadi satu kesatuan yang tidak terpisahkan
            dari Perjanjian ini. Apabila terdapat pertentangan antara ketentuan
            dalam Perjanjian ini dengan ketentuan dalam Surat Penawaran, maka
            ketentuan dalam Perjanjian ini yang akan berlaku.
          </p>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal3;
