export const maskNumber = (num: string) =>
	"*".repeat(num.length - 4) + num.slice(-4);
