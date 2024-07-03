"use client"

import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table
} from "@/components/ui/table"
import axios from "axios"
import { useEffect, useState } from "react"
import { CBSDataList, CBSDataRequest, CBSDataResponse } from "@/lib/model/cbs-data"

export function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [cbsData, setCbsData] = useState<CBSDataResponse>();
  const [cbsRequestData, setCbsRequestData] = useState<CBSDataRequest>(
    {
      userId: '',  
      cifNo: '',   
      trxType: 'M', 
      dayAgo: 120, 
      frmDate: '', 
      toDate: '' 
    }
  );


  const fetchCBSData = async () => {
    try { 
      setLoading(true);
      const response = await axios.post('/api',cbsRequestData,  {
        headers: {
          'Content-Type': 'application/json',
        },
      });  
      setCbsData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchCBSData();
  }, []);
  

  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2"> 
                <CardDescription>
                  Recent Error transactions from CBS
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="/view-all">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>

              </Table>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Transaction</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-8">
                <Card x-chunk="dashboard-01-chunk-3">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">{cbsData?.completed}</div>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-3">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Processing</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">{cbsData?.processing}</div>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-3">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Error</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">{cbsData?.error}</div>
                    </CardContent>
                </Card>
            </CardContent>

          </Card>
        </div>
  )
}
