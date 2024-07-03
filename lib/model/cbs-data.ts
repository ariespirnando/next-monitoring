export interface CBSDataList {
    typTrx: string;
    sysRegDtm: string;
    custNo: string;
    userId: string;
    apvDate: string;
    sysUpdDtm: string;
    obkTrnsMethCd: string;
    chnlBizKindCd: string;
    aprvApvStsCd: string;
    globId: string;
    errMsg: string;
    wdrwBnkCd: string;
    wdrwAcctNo: string;
    rmtrNm: string;
    wdrwPsbkMarkCtt: string;
    rcvBnkCd: string;
    rcvAcctNo: string;
    rmteNm: string;
    rcvPsbkMarkCtt: string;
    curCd: string;
    trscAmt: string;
    rduAfComm: string;
  }
  
  export interface CBSDataResponse {
    completed: number;
    processing: number;
    error: number;
    list: CBSDataList[];
  }

  export interface CBSDataRequest {
    userId: string;
    cifNo: string;
    trxType: string;
    dayAgo: number;
    frmDate: string;
    toDate: string;
  }

  