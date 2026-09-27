import toast from 'react-hot-toast';
import { IoIosWarning } from 'react-icons/io';

export const showSuccessToast = (msg: string) => toast.success(msg, {
    position: 'top-right',
    className: 'border border-[#713200] p-4 text-accent bg-base-200',
    iconTheme: {
        primary: '#C2F800',
        secondary: '#0C0D10',
    }
});



export const showWarnToast = (msg: string) => toast(msg, {
    icon: <IoIosWarning size={24} className=' text-white' />,
    position: 'top-right',
    className: 'border border-warning p-4',
    style: {
        backgroundColor: 'var(--color-warning)',
        color: 'var(--color-base-100)'
    },
    iconTheme: {
        primary: 'var(--color-accent)',
        secondary: 'var(--color-base-100)',
    }
});

export const showErrorToast = (msg: string) => toast.error(msg, {
    position: 'top-right',
    className: 'border border-error p-4',
    style: {
        backgroundColor: 'var(--color-error)',
        color: 'var(--color-error-content)'
    },
    iconTheme: {
        primary: 'var(--color-error-content)',
        secondary: 'var(--color-error)',
    }
});