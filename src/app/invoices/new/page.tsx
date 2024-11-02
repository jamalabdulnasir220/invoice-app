import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


const Dashboard = () => {
  return (
    <main className="flex flex-col justify-center  h-full  gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Create Invoice</h1>
      </div>
      <form className="grid gap-4 max-w-xs">
        <div>
          <Label className="block mb-2 font-semibold text-sm" htmlFor="name">
            Billing Name
          </Label>
          <Input type="text" name="name" id="name" />
        </div>
        <div>
          <Label className="block mb-2 font-semibold text-sm" htmlFor="email">
            Billing Email
          </Label>
          <Input type="text" name="email" id="email" />
        </div>
        <div>
          <Label className="block mb-2 font-semibold text-sm" htmlFor="value">
            Value
          </Label>
          <Input type="text" name="value" id="value" />
        </div>
        <div>
          <Label
            className="block mb-2 font-semibold text-sm"
            htmlFor="description"
          >
            Description
          </Label>
          <Textarea name="description" id="description" />
        </div>
        <div>
            <Button className="w-full font-semibold">
                Submit
            </Button>
        </div>
      </form>
    </main>
  );
};

export default Dashboard;
