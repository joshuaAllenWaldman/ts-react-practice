

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
    {color}
    <button onClick={onClick}>Click My Ass</button>
    </div>
};

export const ChildEx2: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return <div>
    {color}
    {children}
    <button onClick={onClick}>Click My Ass</button>
    </div>
}


