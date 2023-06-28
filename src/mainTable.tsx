import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  registerables as registerablesJS
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(...registerablesJS);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  BarController,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'タイピング練習 小テスト',
    },
  },
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
  responsive: true,
};

const labels = ['第1回', '第2回', '第3回', '第4回', '第5回', '第6回', '第7回','第8回','第9回','第10回','第11回','第12回','第13回','第14回','第15回'];

export default function MainTable(props:any) {
  //安全ではないがlet:anyを使う　:　理由 :　fetchされたデータがundefindの場合Object.values(props.average)が動作しない
  //そのため、undefindを回避するためのコードを以下に記載
  console.log(props)
  let average:any =[]
  let score:any =[]
  if(props.score == undefined){
    console.log("undifinedです")
  }else{
    score = Object.values(props.score)
  }
  if(props.average == undefined){
    console.log("undifinedです")
  }else{
    average = Object.values(props.average)
  }
  const chartData = {
    labels,
    datasets: [
      {
        type: "line" as any,
        label: "準2級合格ライン",
        data: [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],
        borderColor: 'rgb(154,205,50)',
        backgroundColor: 'rgba(154,205,50, 0.5)',
      },
      {
        type: "line" as any,
        label: "全体の平均",
        data: [33,39,54,34,37,40,41,39,37],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
          type: "bar" as any,
          label: props.num + "さんの成績",
          data: score,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
  };

  return(
      <Chart type={"bar"} data={chartData} options={options} />
  );
}
