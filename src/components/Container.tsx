type ContainerProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="bg-main absolute h-full w-full flex justify-center items-center">
        {children}
      </div>
    </>
  );
}
