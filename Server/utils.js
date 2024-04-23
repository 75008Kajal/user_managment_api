function SuccessResult(data) {
  return { status: "success", data };
}

function FailureResult(err) {
  return { status: "error", err };
}

function CreateResult(err, data) {
  return err ? FailureResult(err) : SuccessResult(data);
}

module.exports = {
  SuccessResult,
  FailureResult,
  CreateResult,
};
  