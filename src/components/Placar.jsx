export function Placar(prop) {
  let conta = prop.count;
  if (conta == 0) {
    return <h1>😒</h1>;
  } else if (conta >= 0 && conta < 10) {
    return <h1>😃</h1>;
  } else if (conta >= 10 && conta < 25) {
    return <h1>😁</h1>;
  } else if (conta >= 25 && conta < 50) {
    return <h1>😎</h1>;
  } else if (conta >= 50 ) {
    return <h1>🤩</h1>;
  }
}
//😒😭😞😖🤑😌😜😕😑😶😐🤩🤔🫡😎😀😁😃😄