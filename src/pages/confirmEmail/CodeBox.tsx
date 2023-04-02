import Container from '@/components/Container';
import Divider from '@/components/Divider';
import { PropsWithChildren, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  emailAddress: string;
}

const Button = ({
  children,
  onClick,
  disabled = false,
  className,
}: PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}>) => {
  return (
    <button
      disabled={disabled}
      className={`${className} px-4 py-2 rounded-md font-semibold shadow-sm `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const CodeBoxVerifation = ({ emailAddress }: Props) => {
  const [code, setCode] = useState('');
  return (
    <Container className="max-w-xl">
      <header>
        <h2 className="font-semibold text-slate-600 text-xl">
          Enter the code from your email
        </h2>
      </header>
      <Divider />
      <section className="flex flex-col">
        <p className="text-slate-500 text-md">
          Let's us know that this email address belongs to you. Enter the code
          from the email sent to{' '}
          <span className="font-semibold">{emailAddress}</span>
        </p>
        <div className="flex flex-col mt-2 gap-2">
          <input
            className="h-12 outline-blue-400 w-36 border-2 px-2 rounded-md text-slate-600 text-lg"
            value={`FB - ${code}`}
            onChange={(e) => {
              const value = e.target.value;
              setCode(value.substring(4).trim());
            }}
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]{1,5}"
            type="text"
          />
          <Link
            className="text-blue-600 hover:underline"
            to={`/emailresendconfirmto${emailAddress}`}
          >
            Send Email Again
          </Link>
        </div>
      </section>
      <Divider />
      <footer className="flex justify-end items-end gap-2 w-full">
        <Button
          className="bg-neutral-200 hover:bg-neutral-300 hover:text-slate-800 text-slate-600"
          onClick={() => {}}
        >
          Update contact Info
        </Button>
        <Button
          className={`${
            code.length === 0
              ? 'bg-neutral-100 text-slate-400'
              : 'bg-blue-500 text-white'
          }`}
          disabled={code.length < 5}
          onClick={() => {}}
        >
          Continue
        </Button>
      </footer>
    </Container>
  );
};

export default CodeBoxVerifation;
