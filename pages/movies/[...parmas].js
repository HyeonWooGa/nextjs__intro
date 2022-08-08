import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const [title, id] = router.query.parmas || [];
  // console.log(router);
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}
