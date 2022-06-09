import React from "react";

function BodyLegal7() {
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
          start={11}
          style={{
            marginLeft: "15px",
            listStyle: "lower-latin",
          }}
        >
          <li>
            Pihak Kedua wajib menginformasikan kepada Pihak Pertama apabila ada
            keluhan yang diterima dari receiver dan memberikan tanggapan
            terhadap keluhan ke Pihak Pertama dalam bentuk tertulis berdasarkan
            hasil investigasi dan tindakan perbaikan/pencegahan yang ditentukan
            berdasarkan kurun waktu yang [mohon lgsg ditentukan kurun waktunya]
            dan prosedur yang disetujui. Pihak Kedua wajib menyediakan
            dokumen-dokumen ataupun informasi lainnya yang diperlukan selama
            proses investigasi yang dibutuhkan oleh Pihak Pertama.
          </li>
          <li>
            Pihak Kedua wajib memastikan bahwa seluruh driver telah mengikuti
            pelatihan yang sesuai dengan pekerjaannya, serta menjamin seluruh
            driver memiliki kualifikasi yang memadai berkaitan dengan peran dan
            tanggung jawab mereka. Penerima kontrak harus dapat memberikan bukti
            pelatihan terdokumentasi yang sesuai.
          </li>
        </ol>
      </div>

      <br />

      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 7
        <br />
        PENGAMBILAN BARANG
        <br />
      </p>
      <p style={{ textAlign: "justify" }}>
        Pihak Kedua setuju dan sepakat untuk melaksanakan pengambilan Barang di
        tempat dan waktu sebagaimana ditetapkan dalam MOSTRANS.
      </p>

      <br />

      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 8
        <br />
        KEHILANGAN DAN KERUSAKAN BARANG
        <br />
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Kehilangan atau kerusakan Barang selama perjalanan menjadi tanggung
            jawab Pihak Kedua dengan ketentuan sebagai berikut:
            <ol
              style={{
                marginLeft: "15px",
                listStyle: "lower-latin",
              }}
            >
              <li>
                atas kerusakan, kehilangan dan/atau terdapatnya cacat pada
                Barang terbukti benar disebabkan karena kesalahan nyata dan/atau
                kelalaian dari Pihak Kedua maka Pihak Kedua wajib memberikan
                ganti rugi kepada Pihak Pertama sebesar 100% (seratus persen)
                dari harga jual Barang yang pembayarannya dilakukan berdasarkan
                tagihan ganti rugi dari Pihak Pertama kepada Pihak Kedua.
              </li>
              <li>
                disebabkan oleh tabrakan beruntun, masuk jurang, bencana alam,
                gempa bumi dan bencana alam lainnya yang terbukti dengan adanya
                kerusakan pada armada transportasi, dimana kerugian akan diklaim
                ke pihak asuransi milik Pelanggan Pihak Pertama. Terhadap
                kejadian atau peristiwa dimaksud dalam ayat ini, dimana
                dimungkinkan adanya biaya{" "}
                <span style={{ fontStyle: "italic" }}>deductible</span> dari
                pihak asuransi, maka atas biaya{" "}
                <span style={{ fontStyle: "italic" }}>deductible</span> tersebut
                akan menjadi beban Pihak Kedua yang besarnya diatur pada polis
                asuransi milik Pelanggan Pihak Pertama beserta perubahannya yang
                dibuat dan disepakati oleh Pelanggan Pihak Pertama dan pihak
                asuransi;
              </li>
              <li>
                disebabkan oleh pencurian, perampokan, dibawa kabur, bajing
                loncat, atau pembajakan (
                <span style={{ fontStyle: "italic" }}>
                  theft, robbery, hi-jack
                </span>
                ), dimana kerugian akan diklaim ke pihak asuransi milik
                Pelanggan Pihak Pertama. Terhadap kejadian atau peristiwa
                dimaksud dalam ayat ini, dimana dimungkinkan adanya biaya{" "}
                <span style={{ fontStyle: "italic" }}>deductible</span> dari
                pihak asuransi, maka atas biaya{" "}
                <span style={{ fontStyle: "italic" }}>deductible</span> tersebut
                akan menjadi beban Pihak Kedua yang besarnya diatur pada polis
                asuransi milik Pelanggan Pihak Pertama beserta perubahannya yang
                dibuat dan disepakati oleh Pelanggan Pihak Pertama dan pihak
                asuransi.{" "}
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal7;
