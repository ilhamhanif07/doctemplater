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
      }}
    >
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          start="16"
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            <span style={{ fontWeight: "800" }}>“OTD (On Time Delivery)”</span>{" "}
            adalah target waktu pengiriman suatu produk, yang dihitung dari
            keberangkatan kendaraan Transporter sampai dengan produk diterima
            oleh Receiver.
          </li>
          <li>
            <span style={{ fontWeight: "800" }}>“Shipper”</span> berarti
            Pelanggan atau pemilik Barang yang menggunakan jasa MOSTRANS.
          </li>
          <li>
            <span style={{ fontWeight: "800" }}>“Surat Jalan”</span> adalah
            surat perintah pengiriman produk yang berisi informasi nama
            Pelanggan dan nomor Faktur atau DO yang harus dikirim.
          </li>
          <li>
            <span style={{ fontWeight: "800" }}>“TOP (Terms of Payment)”</span>{" "}
            adalah jangka waktu yang diberikan kepada Pelanggan untuk
            menyelesaikan pembayaran atas pembelian produk.
          </li>
          <li>
            <span style={{ fontWeight: "800" }}>“MOSTRANS”</span> adalah nama
            jasa atau fasilitas aplikasi berbasis situs web dan/atau aplikasi
            selular yang dimiliki oleh Pihak Pertama yang dapat diakses oleh
            Pihak Kedua/Shipper maupun Transporter untuk melakukan transaksi
            menurut Perjanjian ini yang berisi informasi dan/atau daftar yang
            dimiliki oleh Pihak Pertama mengenai pemesanan dan pengiriman
            Barang.
          </li>
          <li>
            <span style={{ fontWeight: "800" }}>“Metode Dedicated”</span> adalah
            metode kerja sama penyediaan kendaraan ekspedisi dimana Pihak Kedua
            memiliki kewajiban/komitmen untuk menyediakan kendaraan ekspedisi
            yang didedikasikan khusus untuk Pihak Pertama dengan biaya ekspedisi
            sesuai dengan kesepakatan Para Pihak.
          </li>
          <li>
            <span style={{ fontWeight: "800" }}>“Metode On-call”</span> adalah
            metode kerja sama penyediaan kendaraan ekspedisi dimana Pihak Kedua
            menyediakan kendaraan ekspedisi untuk Pihak Pertama berdasarkan
            ketersediaan kendaraan ekspedisi milik Pihak Kedua dengan biaya
            ekspedisi sesuai dengan kesepakatan Para Pihak.
          </li>
          <li>
            <span style={{ fontWeight: "800" }}>“Metode Kontrak”</span> adalah
            metode kerja sama penyediaan kendaraan ekspedisi dimana Pihak Kedua
            memiliki kewajiban/komitmen untuk menyediakan kendaraan ekspedisi
            yang didedikasikan khusus untuk Pihak Pertama dengan sistem
            pembayaran tetap per bulannya sesuai dengan kesepakatan Para Pihak.
          </li>
        </ol>
      </div>

      <br />

      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 2
        <br />
        RUANG LINGKUP
        <br />
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Pihak Pertama menunjuk Pihak Kedua untuk melaksanakan penjemputan
            dan pengiriman Barang dari{" "}
            <span style={{ fontStyle: "italic" }}>Shipper</span> kepada{" "}
            <span style={{ fontStyle: "italic" }}>Receiver</span> yang
            dilengkapi dengan Surat Jalan yang berisi alamat lengkap baik{" "}
            <span style={{ fontStyle: "italic" }}>Shipper</span> dan{" "}
            <span style={{ fontStyle: "italic" }}>Receiver</span> serta dokumen
            lainnya sesuai ketentuan yang berlaku dalam menjalankan pengiriman
            barang
          </li>
          <li>
            Pihak Kedua menerima penunjukan oleh Pihak Pertama sebagaimana
            dimaksud pada ayat (1) di atas serta bersedia dilakukan peninjauan
            terhadap lokasi kantor, pool kendaraan, dokumen kendaraan yang akan
            digunakan untuk mengirimkan Barang serta memberikan keterangan
            mengenai kendaraan yang akan dipakai untuk melaksanakan pengiriman
            Barang.
          </li>
          <li>
            Pihak Kedua mengetahui dan sepakat untuk mematuhi dan memenuhi
            ketentuan pemerintah yang berlaku tentang Cara Distribusi Obat yang
            Baik (CDOB), Cara Distribusi Alat Kesehatan yang Baik (CDAKB), ISO
            9001,{" "}
            <span style={{ fontStyle: "italic" }}>
              Good Distribution Practice (GDP)
            </span>{" "}
            serta K3/OHSAS dalam melaksanakan kewajibannya berdasarkan
            Perjanjian ini.
          </li>
          <li>
            Penunjukkan Pihak Kedua oleh Pihak Pertama sebagaimana dimaksud pada
            ayat (1) di atas menggunakan Metode{" "}
            <span style={{ fontStyle: "italic" }}>
              [dedicated/on-call/Kontrak]
            </span>
            .
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal3;
