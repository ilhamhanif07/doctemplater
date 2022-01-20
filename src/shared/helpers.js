import Axios from 'axios';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { ENDPOINT } from './constants';

export const htmlToImage = async (element) => {
    const input = element;
    const canvas = await html2canvas(input, {
        useCORS: true,
    });
    return canvas.toDataURL('image/png');
};

export const swalAlert = ({ text = '', title = 'Alert' }, timer = 5_000) => {
    Swal.fire({
        text,
        title,
        timer,
        position: 'top',
        customClass: { container: 'sweetalert-z-index' }
    });
};

export const swalConfirm = ({ text = 'Anda Yakin?', title = 'Konfirmasi' }, successCB = () => { }, deniedCB = () => { }) => {
    Swal.fire({
        text,
        title,
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonColor: '#ff5e3f',
        confirmButtonColor: '#39da8a',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        position: 'top',
        customClass: { container: 'sweetalert-z-index' }
    }).then(res => res.isConfirmed ? successCB() : deniedCB());
};

export const customAxios = Axios.create({ url: ENDPOINT });
