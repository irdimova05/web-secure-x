"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResultResponses, useResult } from "./result.provider";

export const Result = () => {
  const { result } = useResult();

  if (!result) {
    return null;
  }

  return (
    <Card className="bg-gray-800 border-green-500 border shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-500">
          Резултати от XSS Атака
        </CardTitle>
      </CardHeader>
      <CardContent>
        {"status" in result ? result.status : null}

        {"responses" in result ? (
          <ResponsesTable responses={result.responses} />
        ) : null}
      </CardContent>
    </Card>
  );
};

const ResponsesTable = ({ responses }: { responses: ResultResponses }) => {
  return responses.map((response, index) => {
    return (
      <p>{`${index + 1}. ${response.login}; ${response.password} -> ${
        response.status
      }`}</p>
    );
  });
};
