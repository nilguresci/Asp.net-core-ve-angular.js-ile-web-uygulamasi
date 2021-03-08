using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using SoftwareArge_Assignment.Models;
using Microsoft.AspNetCore.Authorization;

namespace SoftwareArge_Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public CustomerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Authorize]
        //get all customer
        public JsonResult GetCustomer()
        {
            string query = @"select * from dbo.get_all_customers";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SoftwareArgeCon");
            SqlDataReader myReader;
            using (SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using (SqlCommand comm = new SqlCommand(query, conn))
                {
                    myReader = comm.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpGet("{id}")]

        //get customer with id
        public JsonResult GetCustomerWId(int id)
        {
            string query = @"select * from customer c join customer_contact c_ on c.Id=c_.Id where c.Id= '" + id + @"' ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SoftwareArgeCon");
            SqlDataReader myReader;
            using (SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using (SqlCommand comm = new SqlCommand(query, conn))
                {
                    myReader = comm.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }

            if (table.Rows.Count > 0)
            {
                return new JsonResult(table);
            }
            else
            {
                return new JsonResult(this.HttpContext.Response.StatusCode = 403);
            }

        }


        [HttpPost]

        //Add customer
        public JsonResult PostCustomer(Customer cstmr)
        {
            string query = @"exec add_customer
                    '" + cstmr.Name + @"',
                    '" + cstmr.Surname + @"',
                    '" + cstmr.Phone + @"',
                    '" + cstmr.EmailAdress + @"',
                    '" + cstmr.City + @"',
                    '" + cstmr.Town + @"',
                    '" + cstmr.Adress + @"'
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SoftwareArgeCon");
            SqlDataReader myReader;
            using (SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using (SqlCommand comm = new SqlCommand(query, conn))
                {
                    myReader = comm.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }

            return new JsonResult("added successfully");
        }


        [HttpPut("{id}")]

        //Update customer
        public JsonResult PutCustomer(int id,Customer customer)
        {
            string query = @"
                    exec update_customer_contact "+id+@",
                    '" + customer.Phone + @"',
                    '" + customer.EmailAdress + @"',
                    '" + customer.City + @"',
                    '" + customer.Town + @"',
                    '" + customer.Adress + @"'
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SoftwareArgeCon");
            SqlDataReader myReader;
            using (SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using (SqlCommand comm = new SqlCommand(query, conn))
                {
                    myReader = comm.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }

            return new JsonResult("updated successfully");
        }


        [HttpDelete("{id}")]

        //Update customer
        public JsonResult DeleteCustomer(int id)
        {
            string query = @"
                    DELETE FROM customer WHERE Id="+id+@";
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SoftwareArgeCon");
            SqlDataReader myReader;
            using (SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using (SqlCommand comm = new SqlCommand(query, conn))
                {
                    myReader = comm.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }

            return new JsonResult("deleted successfully");
        }




    }
}
