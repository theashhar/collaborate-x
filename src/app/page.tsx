import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function Home() {
  return (<>
    <div className="flex gap-2">
      <Button >asdas</Button>
      <Button variant="primary" >primary</Button>
      <Button variant="secondary" >secondary</Button>
      <Button variant="tertiary" >tertiary</Button>
      <Button variant="destructive" >destructive</Button>
      <Button variant="outline" >outline</Button>
      <Button variant="ghost" >ghost</Button>
      <Button variant="muted" >muted</Button>
    </div>
    <Input />
    <Select />
  </>);
}
