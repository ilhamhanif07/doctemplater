import React from "react";

function BodyLegal2() {
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
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <span style={{ fontSize: "12px" }}>Kewajiban</span>
          <ol
            style={{
              listStyle: "lower-latin",
              marginLeft: "30px",
              fontSize: "12px",
            }}
          >
            <li>
              Membayar Biaya Kirim atas pelaksanaan jasa melalui layanan
              MOSTRANS dengan status{" "}
              <span style={{ fontStyle: "italic" }}>Proof of Delivery</span>{" "}
              (POD) maupun <span style={{ fontStyle: "italic" }}>Rejected</span>{" "}
              dalam jangka waktu 30 (tiga puluh) hari setelah Shipper menerima
              Faktur Tagihan{" "}
            </li>
            <li>Mengasuransikan Barang milik Shipper;</li>
            <li>
              Bertanggung jawab penuh serta membebaskan MOSTRANS dari segala
              tuntutan dalam hal terdapat produk milik Shipper yang terbukti
              melanggar hukum.
            </li>
            <li>Menjaga nama baik, reputasi dan citra MOSTRANS.</li>
            <li>
              Membayar biaya pembatalan sebesar 50% dari tarif ketika truk sudah
              menuju tempat muat dan 75% dari tarif ketika truk sudah sampai di
              tempat muat
            </li>
          </ol>
        </div>
        <br />
        <span
          style={{
            fontWeight: "800",
            textDecoration: "underline",
            fontSize: "12px",
            marginLeft: "15px",
          }}
        >
          Mostrans
        </span>

        <div style={{ display: "flex", marginLeft: "30px" }}>
          <span style={{ fontSize: "12px" }}>Hak</span>
          <ol
            style={{
              listStyle: "lower-latin",
              marginLeft: "65px",
              fontSize: "12px",
            }}
          >
            <li>
              Menerima Biaya Kirim atas penggunaan layanan MOSTRANS atas setiap
              pengiriman Barang dengan status{" "}
              <span style={{ fontStyle: "italic" }}>Proof of Delivery</span>{" "}
              (POD) maupun <span style={{ fontStyle: "italic" }}>Rejected</span>
              , selama Jangka Waktu Perjanjian.
            </li>
          </ol>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <span style={{ fontSize: "12px", marginLeft: "30px" }}>
            Kewajiban
          </span>
          <ol
            style={{
              listStyle: "lower-latin",
              marginLeft: "30px",
              fontSize: "12px",
            }}
          >
            <li>
              Memastikan kelancaran aplikasi MOSTRANS agar dapat digunakan oleh
              Shipper dan{" "}
              <span style={{ fontStyle: "italic" }}>Transporter</span> untuk
              mendapatkan pesanan dalam rangka melakukan pelaksanaan MOSTRANS
              sesuai dengan informasi yang tercantum pada Dokumentasi Sistem;
            </li>
            <li>
              Memastikan ketersediaan{" "}
              <span style={{ fontStyle: "italic" }}>Transporter</span> untuk
              mendapatkan pesanan untuk pelaksanaan MOSTRANS sesuai dengan
              informasi yang tercantum pada Dokumentasi Sistem;
            </li>
            <li>
              Menjamin bahwa{" "}
              <span style={{ fontStyle: "italic" }}>Transporter</span>{" "}
              memberikan notifikasi melalui aplikasi yang terhubung pada
              MOSTRANS kepada Para Pihak pada saat melakukan penjemputan,
              pengiriman, dan sampainya Barang ke tempat yang dituju sesuai pada
              informasi di Dokumentasi Sistem;
            </li>
            <li>
              Menginformasikan Shipper dengan cara mengirimkan notifikasi
              melalui MOSTRANS dalam hal terjadi kegagalan{" "}
              <span style={{ fontStyle: "italic" }}>Transporter</span> dalam
              melakukan penjemputan Barang di tempat Shipper;
            </li>
            <li>
              Menginformasikan Shipper dengan cara mengirimkan notifikasi
              melalui MOSTRANS dalam hal{" "}
              <span style={{ fontStyle: "italic" }}>Transporter</span> gagal
              dalam melakukan pengiriman Barang kepada{" "}
              <span style={{ fontStyle: "italic" }}>Receiver</span> dan
              pengembalian Barang kepada Shipper;
            </li>
            <li>
              Menyediakan informasi pada Dokumentasi Sistem berdasarkan format
              yang ditentukan oleh Mostrans;
            </li>
            <li>
              Memberikan jaminan ganti rugi (yang mana yang mengalami kerugian
              nyata) secara penuh sebesar nilai Barang yang rusak, hilang
              dan/atau cacat. Mostrans hanya berkewajiban memberikan ganti rugi
              atas kerusakan Barang yang nyata yang terjadi selama proses
              penjemputan dan pengiriman Barang oleh{" "}
              <span style={{ fontStyle: "italic" }}>Transporter</span> kepada
              Receiver yang disebabkan oleh kelalaian atau kesalahan
              Transporter, dan pengembalian Barang kepada Shipper dalam hal
              terjadi <span style={{ fontStyle: "italic" }}>Rejected</span>;
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BodyLegal2;
