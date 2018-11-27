class pubdateService {

  onlyDate(pubdate){
    let date = pubdate.split('T')[0]
    return date
  }

}

export default pubdateService;