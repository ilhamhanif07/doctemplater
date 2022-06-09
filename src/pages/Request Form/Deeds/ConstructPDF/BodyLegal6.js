import React from "react";

function BodyLegal6() {
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
          start={3}
          style={{
            marginLeft: "15px",
            listStyle: "lower-latin",
          }}
        >
          <li>
            memberikan petunjuk dan informasi kepada Pihak Kedua mengenai
            penanganan Barang yang memerlukan penanganan khusus seperti namun
            tidak terbatas pada suhu dan letak/posisi Barang;
          </li>
          <li>
            emberikan petunjuk dan informasi kepada Pihak Kedua mengenai
            penanganan{" "}
            <span style={{ fontStyle: "italic" }}>Cold Chain Product;</span> dan
          </li>
          <li>
            memberikan sosialisasi kepada Pihak Kedua mengenai CDOB, CDAKB, ISO
            9001, GDP, dan K3/OHSAS.
          </li>
        </ol>
      </div>

      <br />

      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 6
        <br />
        HAK DAN KEWAJIBAN PIHAK KEDUA
        <br />
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Pihak Kedua berhak untuk:
            <ol
              style={{
                marginLeft: "15px",
                listStyle: "lower-latin",
              }}
            >
              <li>
                menerima pembayaran atas tagihan pengiriman Barang secara tepat
                waktu selambat–lambatnya 30 (tiga puluh) hari kalender sejak
                diterimanya tagihan secara baik dan benar,{" "}
              </li>
              <li>
                tanpa mengesampingkan ketentuan Pasal 7 dan Pasal 8, menerima
                pembayaran atas tagihan pengiriman Barang secara penuh dari
                Pihak Pertama.
              </li>
            </ol>
          </li>
          <li>
            Pihak Kedua berkewajiban untuk:
            <ol
              style={{
                marginLeft: "15px",
                listStyle: "lower-latin",
              }}
            >
              <li>
                menyediakan armada transportasi dan pengemudi (
                <span style={{ fontStyle: "italic" }}>driver</span>) sesuai
                dengan{" "}
                <span style={{ fontStyle: "italic" }}>
                  Service Level Agreement
                </span>{" "}
                (untuk selanjutnya disebut{" "}
                <span style={{ fontWeight: "800" }}>”SLA”</span>) Pihak Pertama
                sebagaimana diatur pada Lampiran II Perjanjian ini;
              </li>
              <li>
                memenuhi ketentuan dalam pengiriman Barang dengan mengacu pada
                CDOB dan/atau CDAKB, ISO9001, GDP dan K3/OHSAS;
              </li>
              <li>
                menyelesaikan semua pengiriman Barang sebagaimana disebutkan
                dalam MOSTRANS;
              </li>
              <li>
                melakukan pengiriman Barang ke{" "}
                <span style={{ fontStyle: "italic" }}>Receiver</span> sesuai
                dengan ketetapan Pihak Pertama sebagaimana diatur pada Lampiran
                II Perjanjian ini;
              </li>
              <li>
                menjaga suhu produk CCP yang tersimpan dalam box/container
                kendaraan agar selalu memenuhi syarat yang ditetapkan oleh{" "}
                <span style={{ fontStyle: "italic" }}>Shipper</span>.
              </li>
              <li>
                menjamin keamanan dan keselamatan Barang selama perjalanan
                sampai dengan alamat tujuan dan memastikan bahwa jumlah Barang
                yang dikirim dan diterima{" "}
                <span style={{ fontStyle: "italic" }}>Receiver</span> adalah
                sama dengan jumlah Barang yang tertera pada Surat Jalan{" "}
              </li>
              <li>
                menjamin <span style={{ fontStyle: "italic" }}>lead time</span>{" "}
                pengiriman dan pengembalian dokumen pengiriman Barang seperti
                namun tidak terbatas pada tanda terima Barang dan Surat Pesanan,
                sesuai dengan waktu yang telah disepakati Para Pihak;
              </li>
              <li>
                menjaga Barang sesuai dengan petunjuk yang diberikan Pihak
                Pertama khususnya terkait penggunaan suhu dan posisi/peletakan
                Barang agar tidak tercampur atau berdekatan dengan barang lain
                yang dapat mengakibatkan kontaminasi;
              </li>
              <li>
                menyediakan armada transportasi pengganti untuk melanjutkan
                pengiriman Barang apabila armada transportasi tersebut mengalami
                kerusakan yang mengakibatkan armada tidak bisa melanjutkan
                pengiriman Barang selambat-lambatnya sesuai dengan ketentuan
                sebagaimana dijelaskan pada Lampiran I Perjanjian ini;{" "}
              </li>
              <li>
                mematuhi jadwal pengambilan (
                <span style={{ fontStyle: "italic" }}>pick-up</span>) Barang
                yang telah ditetapkan sesuai dengan Lampiran II Perjanjian ini;
                dan
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal6;
