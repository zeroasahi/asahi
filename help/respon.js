// Function respon

//-- 
const wait = () => { 
return '◌ Silahkan Tunggu'
}

//--
const stick = () => {
  return '● Gagal, silahkan ulangi setelah pesan ini'
}

//--
const err = (prefix) => {
  return `● Maaf sepertinya fitur sedang error, ketik ${prefix}report`
}

//-- 
const group = () => {
  return '● Fitur ini hanya untuk group'
}

//-- 
const ban = () => {
  return '● Kamu masuk kedalam ban list'
}

//--
const ownerB = () => {
  return '● Fitur ini hanya untuk Owner'
}

//--
const premi = () => {
  return '● Fitur ini khusus user Premium'
}

//--
const userB = (prefix) => {
  return `● Kamu belum melakukan verifikasi, ketik *${prefix}Verify* untuk memulai menggunakan bot`
}

//--
const admin = () => {
  return '● Fitur ini hanya untuk Admin Group'
}

//--
const Badmin = () => {
  return '● Jadikan Hisiron Bot Admin terlebih dahulu!'
}


module.exports =  { wait, stick, err, group, ban, ownerB, premi, userB, admin, Badmin } 