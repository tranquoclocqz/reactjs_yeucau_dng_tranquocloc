import MainTitle from "../components/shared/MainTitle";
export default function DemoMainTitle() {
  return (
    <div>
      <MainTitle title="Khong co button" />
      <MainTitle title="co button ne" btnAttribute={{type: 'category', children: 'view more', loading: true}}/>
    </div>
  );
}
