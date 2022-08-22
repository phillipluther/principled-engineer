import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { VisuallyHidden } from 'react-aria';
import { IoClose } from 'react-icons/io5';

export type DrawerProps = {
  title: React.ReactNode;
  closeLabel?: string;
  onClose: (value?: boolean) => void;
  children: React.ReactNode;
  isOpen: boolean;
};

const Drawer = ({
  title,
  isOpen,
  onClose,
  closeLabel = 'Close Menu',
  children,
}: DrawerProps) => {
  return (
    <Transition show={isOpen} unmount={true}>
      <Dialog onClose={onClose} unmount={true}>
        <Transition.Child
          enter="transition-opacity ease-in"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity ease-out"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
          as={Fragment}
          unmount={true}
        >
          <div
            className={[
              'fixed',
              'top-[0px]',
              'right-[0px]',
              'bottom-[0px]',
              'left-[0px]',
              'bg-brando-100',
            ].join(' ')}
          />
        </Transition.Child>
        <Transition.Child
          enter="transition-transform ease-in"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform ease-out"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          as={Fragment}
          unmount={true}
        >
          <Dialog.Panel
            as="section"
            className={[
              'fixed',
              'top-[0px]',
              'right-[0px]',
              'max-w-[320px]',
              'h-screen',
              'bg-brando-200',
              'text-brando-700',
              'z-50',
              'p-4',
              'shadow-md',
            ].join(' ')}
          >
            <header className="flex justify-between content-center mb-4">
              <Dialog.Title>{title}</Dialog.Title>

              <button
                type="button"
                className="icon-button bg-brando-300 text-[36px]"
                onClick={() => onClose()}
              >
                <IoClose className="mx-auto" />
                <VisuallyHidden>{closeLabel}</VisuallyHidden>
              </button>
            </header>

            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
