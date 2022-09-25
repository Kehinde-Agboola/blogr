import { v4 as uuidv4 } from "uuid";

const Fetch = () => [
  {
    id: uuidv4(),
    title: "Product",
    links: ["Overview", "Pricing", "MarketPlace", "Features", "Interactions"],
  },
  {
    id: uuidv4(),
    title: " Company",
    links: ["About", " Team", " Blog", " Careers"],
  },
  {
    id: uuidv4(),
    title: " Connect",
    links: [" Contact", " Newsletter", " LinkedIn"],
  },
];

export default Fetch;
