interface TestFileProps {
    int: number;
    str: string;
    bool: boolean;
}

export function TestFile({int, str, bool}: TestFileProps) {
  return <div>
    <p>{int}</p>
    <p>{str}</p>
    <p>{bool.toString()}</p>
  </div>
}