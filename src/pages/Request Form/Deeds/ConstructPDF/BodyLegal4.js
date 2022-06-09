import React from "react";
import { useRecoilState } from "recoil";
import { dataManagementFee } from "../BaseRecoil";

function BodyLegal4() {
  const [localDataManagementFee, setDataManagementFee] = useRecoilState(dataManagementFee);
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
        PASAL 3
        <br />
        JANGKA WAKTU
        <br />
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Perjanjian ini berlaku selama [1] (satu) tahun terhitung sejak
            tanggal [TANGGAL BULAN TAHUN] sampai dengan tanggal [TANGGAL BULAN
            TAHUN] (selanjutnya disebut{" "}
            <span style={{ fontWeight: "800" }}>“Jangka Waktu”</span>).
          </li>
          <li>
            Apabila sampai dengan Jangka Waktu Perjanjian ini berakhir dan tidak
            ada pemberitahuan tentang pengakhiran Perjanjian dari salah satu
            Pihak, maka Para Pihak sepakat dan setuju terhadap Perjanjian ini
            diperpanjang otomatis secara terus menerus selama 1 (satu) tahun.
          </li>
          <li>
            Apabila salah satu dan/atau Para Pihak berkeinginan untuk mengakhiri
            Perjanjian ini lebih awal sebelum Jangka Waktu berakhir, dan tunduk
            pada kesepakatan bersama oleh Para Pihak, maka Pihak yang mengakhiri
            wajib memberitahukan kepada Pihak lainnya mengenai maksud tersebut
            secara tertulis sekurang-kurangnya 30 (tiga puluh) hari sebelum
            tanggal pemutusan Perjanjian yang dikehendaki.
          </li>
          <li>
            Pengakhiran Perjanjian sebagaimana dimaksud pada ayat (3) di atas
            tidak akan mempengaruhi hak dan kewajiban masing-masing Pihak yang
            masih harus diselesaikan berdasarkan Perjanjian ini.
          </li>
          <li>
            Para Pihak sepakat dan setuju bahwa Pihak Pertama berhak melakukan
            evaluasi terhadap kinerja dari Pihak Kedua sekurang-kurangnya 2
            (dua) kali dalam setahun. Apabila Pihak Kedua ditemukan tidak
            memenuhi kriteria SLA yang telah ditetapkan dalam Lampiran
            Perjanjian ini, maka Pihak Pertama berhak menerapkan ketentuan ayat
            3 Pasal ini dan Pasal 11 Perjanjian ini.
          </li>
        </ol>
      </div>

      <br />

      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 4
        <br />
        BIAYA PENGIRIMAN DAN PEMBAYARAN
        <br />
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Para Pihak sepakat yang dimaksud dengan biaya pengiriman adalah
            biaya yang diperlukan untuk mengirimkan Barang, di mana biaya
            tersebut sudah termasuk door to door service namun tidak termasuk
            premi asuransi (untuk selanjutnya disebut{" "}
            <span style={{ fontWeight: "800" }}>“Biaya Pengiriman”</span>).
            Biaya Pengiriman secara rinci diatur di dalam Lampiran I Perjanjian
            ini.
          </li>
          <li>
            Atas penggunaan MOSTRANS oleh Pihak Kedua, Pihak Kedua wajib
            memberikan Pihak Pertama management fee sebesar{" "}
            {localDataManagementFee}% (persen) dari total Biaya Pengiriman.
            Biaya pengiriman selama bulan berjalan yang akan ditagihkan Pihak
            Pertama kepada Pihak Kedua pada awal bulan selanjutnya (untuk
            selanjutnya disebut{" "}
            <span style={{ fontWeight: "800" }}>“Management fee”</span>).
          </li>
          <li>
            Dalam hal terjadi perubahan Biaya Pengiriman, perubahan tersebut
            harus disampaikan secara tertulis oleh Pihak Kedua kepada Pihak
            Pertama paling lambat 14 (empat belas) Hari Kerja sebelum biaya
            pengiriman yang baru berlaku dan akan dilampirkan dalam Perjanjian
            ini.
          </li>
          <li>
            Perubahan terhadap Biaya Pengiriman dapat berlaku berdasarkan
            kesepakatan tertulis oleh Para Pihak.
          </li>
          <li>
            Para Pihak sepakat dan setuju untuk masing-masing menanggung dan
            membayarkan setiap kewajiban pajak yang timbul berdasarkan
            Perjanjian ini sesuai dengan ketentuan perpajakan yang berlaku di
            Indonesia, yang berlaku saat ini maupun di kemudian hari termasuk
            tetapi tidak terbatas memenuhi kelengkapan dokumen perpajakan yang
            baik dan benar. Dalam hal Pihak Pertama diwajibkan untuk melakukan
            pemotongan pajak
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal4;
