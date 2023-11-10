//What will be the outputs of these codes?

//1

Promise.resolve()
  .then(() => console.log(1))
  .catch(() => console.log(3))
  .then(() => {
    console.log(2);
    throw new Error();
  })
  .then(() => console.log(4))
  .then(() => console.log(4));

Promise.resolve()
  .then(() => console.log(11))
  .then(() => {
    console.log(12);
    throw new Error();
  })
  .catch(() => console.log(13))
  .catch(() => console.log(14))
  .then(() => console.log(15));

//1
//11
//12
//2
//13
//15
//error

/*Unenq 2 promise : 1-in promisi resolve-y katarvum e u arajin then-y console.log e anum 1, catch-y 
  chi anum qani vor reject chkar, 
  hajordy katarvume 2-rd promisi resolve-y  ev log e anum 11 , noric katarvume then-y log e anum 12 
   , veradarnum e 1-i then-y log e anum 2, erkrord promisum nerqevum error e linum cathci mej e mtnum log 
   anum 13, heto then nerqevi thenn e anum log anum 15, bardzranum e verev 1-i mej error e linum catch chunenq
   handle ani , error e tpum*/

// 2
Promise.resolve()
  .then((data) => {
    throw new Error("Api Error");
    return 1;
  })
  .then((data) => console.log("ok"))
  .catch((error) => {
    console.log(error.message);
    return "2";
  })
  .then((data) => {
    console.log(data);
  });

//Api Error
//2

/*Promisi resolve-y then-i mej e mtnum , nor error e generacnum , hajord theni mej chi mtnum 
  gnum e  catchi-i mej log e anum errori- message-y ev veradardznum 2 bayc chi tpum, hajordiv verji 
  then-i mej e mtnum datayov vory 2 e , log e anum datan aysinqn 2   */

//3
console.log(1);
setTimeout(() => {
  console.log(2);
}, 20);

Promise.resolve()
  .then(() => {
    console.log(3);
    return 1;
  })
  .catch((e) => console.log(e, 4))
  .finally((res) => console.log(res, 5))
  .then((res) => console.log(res));
console.log(6);

// 1
// 6
// 3
// undefined ,5
// 1
// 2

/* Skzbic log e anum 1, heto setTimout-y der chi anum callback e 20 milivayrkyanic heto, 
heto log e anum 6 normal sinxron masy , aynuhetev veradarnum promisin 
promisey resolve e linum , then-n e katarvum log e anum 3, return anum 1 , bayc log chi anum 
catchi mej chenq mtnum , mtnum e finally mej vory res-y verevic chi stanum vorpes arjeq, inqy ankax e , 
=> resi arjeqy klini undefined log e anum undefined,5 , heto mtnum e then-i mej
 verevic stacac res ardyunqov ` 1, log e anum resy` 1 , aynuhetev log e anum setTimeouti-i 2-y:
*/

//4

let a = 5;

setTimeout(() => {
  console.log(a);
  a = 10;
}, 0);

let p = new Promise((resolve, reject) => {
  console.log(a);
  a = 25;
  resolve();
});
p.then((res) => {
  console.log("final result ", res);
});
console.log(a);

// 5
// 25
// final result undefined
// 25
