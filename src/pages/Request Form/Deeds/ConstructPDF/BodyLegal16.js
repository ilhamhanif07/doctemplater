import React from "react";

function BodyLegal16() {
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
      <p style={{ textAlign: "center", fontWeight: "800" }}>
        LAMPIRAN II <br /> SERVICE LEVEL AGREEMENT{" "}
      </p>

      <br />

      <p>
        <span style={{ fontWeight: "800" }}>On Time Arrival (OTA) 97.5%</span>
      </p>
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "disc",
          }}
        >
          <li>
            Memastikan driver beserta armada tiba dilokasi muat tepat waktu
          </li>
          <li>
            Menyediakan armada transportasi pengganti untuk melanjutkan
            pengiriman Barang apabila armada transportasi tersebut mengalami
            kerusakan yang mengakibatkan armada tidak bisa melanjutkan
            pengiriman Barang selambat-lambatnya 1 jam setelah mendapatkan
            laporan
          </li>
        </ol>
      </div>

      <br />

      <p>
        <span style={{ fontWeight: "800" }}>On Time Delivery (OTD) 97.5 %</span>
      </p>
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "disc",
          }}
        >
          <li>
            Memastikan driver tiba di lokasi bongkar sesuai dengan estimasi
            waktu yang sudah diberikan oleh pihak MOSTRANS
          </li>
        </ol>
      </div>

      <br />

      <p>
        <span style={{ fontWeight: "800" }}>Order Fullfillment (OF) 100%</span>
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "disc",
          }}
        >
          <li>
            Mengkonfirmasi order sesuai dengan ketersediaan mobil paling lambat
            20 menit setelah order diberikan
          </li>
          <li>
            Memilih nomor polisi armada transportasi dan driver yang akan
            digunakan kepada Pihak Pertama setelah order di konfirmasi
          </li>
        </ol>
      </div>

      <br />

      <p>
        <span style={{ fontWeight: "800" }}>Quality Complain 100%</span>
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "disc",
          }}
        >
          <li>
            Memastikan armada yang digunakan untuk mengangkut produk harus tahan
            cuaca, kering, bersih dari debu/kotoran/sampah/serangga/hama, tidak
            bau dan karatan/tajam
          </li>
          <li>
            Memastikan armada dan peralatan sesuai untuk mencegah paparan
            terhadap kondisi yang dapat mempengaruhi kualitas dan integritas
            pengemasan dan mencegah kontaminasi dalam bentuk apapun
          </li>
          <li>
            Menyediakan armada yang memiliki bak (box) tertutup dan harus
            dikunci setiap saat
          </li>
          <li>Menyediakan armada dengan umur maksimal 10 (sepuluh) tahun</li>
          <li>
            Menyediakan armada dalam kondisi prima dan memiliki surat-surat
            tanda kendaraan yang sah dan siap digunakan.
          </li>
          <li>
            Menyediakan armada yang digunakan sudah dilengkapi dengan GPS dan
            terintegrasi dengan aplikasi Mostrans serta memastikan GPS berfungsi
            dengan baik
          </li>
          <li>
            Khusus armada yang mengangkut CCP, wajib memiliki peralatan yang
            digunakan untuk memonitor suhu selama transportasi di dalam
            kendaraan dan/atau box, harus dijaga dan dikalibrasi secara berkala.
          </li>
          <li>
            Melakukan program pelatihan driver yang sesuai, yang menjamin
            kualifikasi yang memadai dari semua driver berkaitan dengan peran
            dan tanggung jawabnya. Pihak{" "}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal16;
