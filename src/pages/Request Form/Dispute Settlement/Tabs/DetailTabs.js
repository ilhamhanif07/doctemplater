import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Input from "@mostrans/web-components/components/base/Input";
import Select from "react-select";
import { useApolloClient } from "@apollo/client";
import { GetCurrencyLegal } from "../../../../GQL/query";

export default function DetailTabs() {
  const client = useApolloClient();
  const [dataCurrency, setDataCurrency] = useState([]);

  const optionBoolean = [
    { label: "Yes", value: "1" },
    { label: "No", value: "0" },
  ];

  const fetchDataCurrency = async () => {
    const query = await GetCurrencyLegal(client);
    setDataCurrency(query.getCurrencyLegal.data);
  };

  useEffect(() => {
    fetchDataCurrency();
  }, []);

  let optionsDataCurrency = dataCurrency.map((el) => {
    return { value: el.description, label: el.code + " - " + el.description };
  });

  return (
    <div>
      <Grid>
        <label className="control-label">Amount of Debt</label>
        <Select
          name="form-field-name"
          placeholder="Choose Your Option"
          onChange={(e) => {}}
          className={"mb-1"}
          options={optionBoolean}
        />
      </Grid>
      <Grid>
        <label className="control-label">Currency</label>
        <Select
          name="form-field-name"
          placeholder="Choose Your Option"
          onChange={(e) => {}}
          className={"mb-1"}
          options={optionsDataCurrency}
        />
      </Grid>
      <Grid>
        <label className="control-label">Amount</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">International Company</label>
        <Select
          name="form-field-name"
          placeholder="Choose Your Option"
          onChange={(e) => {}}
          className={"mb-1"}
          options={optionBoolean}
        />
      </Grid>
      <h5 style={{ fontWeight: "bold" }}>Counterpart</h5>
      <Grid>
        <label className="control-label">Name</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">Address</label>
        <Input
          style={{ minHeight: "200px" }}
          className={"w-100 mb-1"}
          multiline
          onChange={(e) => {}}
          type="text"
        />
      </Grid>
      <Grid>
        <label className="control-label">Province</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">Regency</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">Sub District</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">Village</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <h5 style={{ fontWeight: "bold" }}>Owner / Director</h5>
      <Grid>
        <input type="checkbox" />
        <p2 style={{ fontWeight: "bold", marginLeft: "15px" }}>
          Please check if counterpart is individual and have same data
        </p2>
      </Grid>
      <Grid>
        <label className="control-label">Name</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">Address</label>
        <Input
          style={{ minHeight: "200px" }}
          className={"w-100 mb-1"}
          multiline
          onChange={(e) => {}}
          type="text"
        />
      </Grid>
      <Grid>
        <label className="control-label">Province</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">Regency</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">Sub District</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
      <Grid>
        <label className="control-label">Village</label>
        <Input className={"w-100 mb-1"} onChange={(e) => {}} type="text" />
      </Grid>
    </div>
  );
}
