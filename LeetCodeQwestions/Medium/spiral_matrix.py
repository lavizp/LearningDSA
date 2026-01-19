
def spiralOrder(matrix):
    if not matrix or not matrix[0]:
        return []
    x = len(matrix[0])  
    y = len(matrix)
    leng = x * y
    i = 0
    j = 0
    output = []
    for k in range(leng):
        output.append(matrix[i][j])
        if j < x - 1:  
            j += 1
        elif i == y-1 & j == x-1:
            j-=1
        elif i < y - 1: 
            i += 1
    print(output)

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])