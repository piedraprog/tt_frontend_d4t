
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Episodes } from '../utils/interfaces/episodes.interface';
import { Badge } from "@/components/ui/badge"
import CharacterHoverCard from './hoverCharCard';


interface TableProps<T> {
  data: T[];
  dataType: 'Episodes' | 'Characters';
}

export const DataTableComponent: <T>(props: TableProps<T>) => JSX.Element = ({ data }) => {

  const columnsHeaders = Object.keys(data[0] || {}) as Array<keyof (Episodes)>;
  const router = useRouter();

  // function onClick() {
  //   router.replace(`/?offset=${offset}`);
  // }


  return (
    <>
      <h1>Tabla</h1>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              {
                columnsHeaders.map((header)=>(
                  <TableHead className="max-w-[150px]" key={header}>
                    {header.toLocaleUpperCase()}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <EpisodeRow key={index} data={row} />
            ))}
          </TableBody> 
        </Table>
      </form>
      {/* {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onclick()}
        >
          Next Page
        </Button>
      )}  */}
    </>
  );
}


function EpisodeRow({ data }: { data: any }) {
  // const userId = user.id;
  // const deleteUserWithId = deleteUser.bind(null, userId);

  return (
    <TableRow>
      <TableCell className="font-small">{data.id}</TableCell>
      <TableCell className="font-small">{data.name}</TableCell>
      <TableCell className="font-small">{data.air_date}</TableCell>
      <TableCell className="font-small">{data.episode}</TableCell>
      <TableCell className="font-small">
        {/* <CharacterHoverCard characterUrl={data.characters[0]}></CharacterHoverCard> */}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge variant="outline">Badge</Badge>
      </TableCell>
      <TableCell>
        <Button
          className="w-full"
          size="sm"
          variant="outline"
          // formAction={deleteUserWithId}
          disabled
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
