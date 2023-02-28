import clsx from 'clsx';
import exclamationIcon from '~/assets/icons/exclamation.svg';

function getClassName({ className }) {
  return clsx('flex rounded-lg p-4 text-sm', className);
}

const variants = {
  success: 'bg-green-100 text-green-700',
  danger: 'bg-red-100 text-red-700',
};

function Alert({ children, className, variant = 'success' }) {
  return (
    <div className={clsx(variants[variant], getClassName({ className }))}>
      <img src={exclamationIcon} alt="exclamation" />
      <div className="ml-2">{children}</div>
    </div>
  );
}

export default Alert;
