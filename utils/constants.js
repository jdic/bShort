const INTERNAL_SERVER_ERROR = { status: 500, message: 'Internal Server Error' }
const NOT_FOUND = { status: 404, message: 'Not Found' }
const OK = { status: 200, message: 'OK' }
const BAD_REQUEST = { status: 400, message: 'Bad Request' }

module.exports =
{
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
  BAD_REQUEST
}